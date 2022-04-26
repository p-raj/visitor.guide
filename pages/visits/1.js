import React from "react";
import ReactMarkdown from "react-markdown";
import Handlebars from "handlebars";
import rehypeRaw from "rehype-raw";
import { Steps } from "antd";
import { data } from "../api/data";
import Layout from "../../components/Layout";
const { Step } = Steps;

export async function getStaticProps() {
    return {
        props: {
            data: data,
        },
    };
}

export default function FirstVisit({ data }) {
    const numSpaces = (lines) =>
        lines.reduce((acc, cur) => {
            const index = cur.search(/[^\s]/);
            return index > 0 && (acc == 0 || index < acc) ? index : acc;
        }, 0);

    const multiLineTrim = (str) => {
        const lines = str.split("\n");
        const delSpacesNum = numSpaces(lines) - 0;

        return lines
            .map((x, index) =>
                x.search(/[^\s]/) == -1
                    ? ""
                    : index > 0
                    ? x.substring(delSpacesNum)
                    : x
            )
            .join("\n");
    };

    // Explore MDX
    const designToApp = (content) => {
        let [renderModule, renderComponent] = content.type.split("__");

        if (renderModule === "md") {
            const design = multiLineTrim(content.design);
            let compiledDesign = null;
            if (renderComponent === "list") {
                const __ = Handlebars.registerPartial(
                    "iterDesign",
                    content.design
                );
                let listDesign = `
                {{#each . }}
                    {{>iterDesign}}
                {{/each}}
                `;
                listDesign = `<div class="list">${listDesign}</div>`;
                compiledDesign = Handlebars.compile(listDesign);
            } else if (renderComponent == "grid") {
                const __ = Handlebars.registerPartial(
                    "iterDesign",
                    content.design
                );
                let listDesign = `
                {{#each . }}
                    {{>iterDesign}}
                {{/each}}
                `;
                // listDesign = multiLineTrim(listDesign);
                listDesign = `<div class="grid-list">${listDesign}</div>`;
                compiledDesign = Handlebars.compile(listDesign);
            } else {
                compiledDesign = Handlebars.compile(design);
            }
            const finalCompiledData = multiLineTrim(
                compiledDesign(content.value)
            );
            return (
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                    {finalCompiledData}
                </ReactMarkdown>
            );
        } else if (renderModule === "antd") {
            if (renderComponent === "timeline") {
                const steps = content.design;
                const currentStep = content.value;
                return (
                    <Steps progressDot current={currentStep} responsive>
                        {steps.map((item) => (
                            <Step
                                key={item.title}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                    </Steps>
                );
            }
            return <></>;
        } else {
            return <></>;
        }
    };

    // render the data cards
    const renderCards = (cards) => {
        return cards.map((c, index) => {
            return (
                <div key={index} className="card">
                    {designToApp(c.content)}
                </div>
            );
        });
    };

    return <Layout>{renderCards(data.cards)}</Layout>;
}
