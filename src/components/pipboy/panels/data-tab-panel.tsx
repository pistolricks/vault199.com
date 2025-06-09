import {Component, For} from "solid-js";
import MouseMoveEffect from "~/components/ui/mouse-move-effect";
import {Tabs} from "@ark-ui/solid";




/*
*     matches: Matches<{
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
    }>
* */
type PROPS = {}


const DataTabPanel: Component<PROPS> = props => {



    return (
        <div
            class="tab-pane fade"
            role="tabpanel"
            id="data"
            aria-labelledby="data-tab"
        >
            <div class="pip-body mt-24 sm:mt-4">
                <Tabs.Root orientation={"horizontal"}>
                <Tabs.List property={"ul"} class="options w-full" role="tablist">
                    <For each={allQuests}>
                        {(quest, i) => (
                            <Tabs.Trigger
                                property={"li"}
                                value={quest.id}
                                class={i() === 0 ? "active w-full" : "w-full"}
                                data-bs-toggle="tab"
                                data-bs-target={`#${quest.id}`}
                                role="tab"
                            >
                                {quest.data.title}
                            </Tabs.Trigger>
                        )}
                    </For>
                    <Tabs.Trigger
                                property={"li"}
                                value={"embedded-inc"}
                                class={"w-full"}
                                data-bs-toggle="tab" data-bs-target="#embedded-inc" role="tab">
                        Robco Industries
                    </Tabs.Trigger>
                    <Tabs.Trigger
                                property={"li"}
                                value={"side-data"}
                                class={"w-full"}
                                data-bs-toggle="tab" data-bs-target="#side-data" role="tab">
                        Side Quests
                    </Tabs.Trigger>
                </Tabs.List>
                <div class="tab-content">
                    <For each={allQuests}>
                        {(quest, i) => (
                            <QuestContent
                                id={quest.id}
                                questData={quest.data}
                                isFirst={i() === 0}
                            />
                        )}
                    </For>
                    <Redacted tabId="embedded-inc"/>
                    <SideQuest/>
                </div>
                </Tabs.Root>
            </div>
        </div>
    );
};

export default DataTabPanel;


const QuestContent: Component<{
    id: string;
    questData: any;
    isFirst: boolean;
}> = props => {

    const id = () => props.id;
    const questData = () => props.questData;
    const isFirst = () => props.isFirst;

    return (
        <Tabs.Content
            value={id()}
            class={
                isFirst() ? "info tab-pane fade  active show" : "info tab-pane fade "
            }
            id={id()}
            role="tabpanel"
            aria-labelledby={`${id()}-tab`}
        >
            <div class="post">
                <div class="underlined-title">
                    <h4>{questData().title}</h4>
                    <span></span>
                </div>
                <p>Status: {questData().status.toUpperCase()}</p>
                <p>Location: {questData().location}</p>
                <p>Position: {questData().position}</p>
                <p>Duration: {questData().duration}</p>
                <p>Promotions: </p>
                <ul>
                    <For each={questData().promotions}>
                        {(promotion) => (
                            <li>● {promotion}</li>
                        )}
                    </For>
                </ul>
                <div style={{height: "2em"}}></div>
                <p>Showcase: </p>

                <div
                    id={`carousel-${id()}`}
                    class="carousel slide w-100 carousel-fade"
                    data-bs-ride="carousel"
                    style={{height: '100px'}}
                >
                    <div class="carousel-inner w-100">
                        <For each={questData().images}>
                            {(image, i) => (
                                <div
                                    class={i() === 0 ? "carousel-item active" : "carousel-item"}
                                    // style={{ margin: "0 auto" }}
                                >
                                    <MouseMoveEffect factorX={0.5} factorY={0.5}>
                                        <img
                                            src={image}
                                            style={{
                                                width: "100%",
                                                'max-height': '250px',
                                                'object-fit': "contain",
                                            }}
                                            alt={""}
                                        />
                                    </MouseMoveEffect>
                                </div>
                            )}
                        </For>
                    </div>
                </div>
                <ul>
                    <For each={questData().showcase}>
                        {(showcase) => (
                            <li>
                                ● {showcase.name}
                            </li>
                        )}
                    </For>
                </ul>
                <div style={{height: "2em"}}></div>
                <p>Key details:</p>
                <ol>
                    <For each={questData().pointers}>
                        {(pointer) => (
                            <li>{pointer}</li>
                        )}
                    </For>
                </ol>
            </div>
        </Tabs.Content>
    );
};

const data: any = {
    QuestsTabPanel: [
        {
            title: "Enclave",
            location: "Remote",
            status: "ACTIVE",
            position: "Soldier",
            promotions: [],
            duration: "JUN 2022 - PRESENT",
            showcase: [
                {
                    url: "",
                    name: "Enclave",
                },
            ],
            pointers: [
                "",
            ],
            images: [
                "",
            ],
        },
        {
            title: "Sanctuary",
            location: "Sanctuary",
            status: "Completed",
            position: "Sheriff",
            promotions: [
                "Sheriff",
            ],
            duration: "JAN 2221 - JUNE 2222",
            showcase: [],
            pointers: [],
            images: [],
        },
    ],
};


const getTitleId = (title = "") => title.split(" ").join("_").toLowerCase();

const allQuests = data.QuestsTabPanel.filter((e) => e.hidden !== true).map(
    (e) => ({
        id: getTitleId(e.title),
        data: e,
    })
);

const SideQuest: Component = props => {

    return (
        <Tabs.Content
            value={"side-data"}
            class="info tab-pane fade"
            id="side-data"
            role="tabpanel"
            aria-labelledby="side-data-tab"
        >
            <div class="post">
                <div class="underlined-title">
                    <h4>Lone Wanderer</h4>
                    <span></span>
                </div>
                <p>Duration: 2217 - PRESENT</p>
                <ol>
                    <li>

                    </li>
                    <li></li>
                    <li>

                    </li>
                </ol>
                <p style={{'font-size': '10px', 'text-align': "center"}}>

                </p>
            </div>
        </Tabs.Content>
    );
};


const Redacted: Component<{
    tabId: string;
}> = props => {

    return (
        <Tabs.Content
            value={props.tabId}
            class="info tab-pane fade"
            id={`${props.tabId}`}
            role="tabpanel"
            aria-labelledby={`${props.tabId}-tab`}
        >
            <div class="post">
                <p>
                    DATA CORRUPTED... <br/>
                    ##$%&'()*+,-./:;=?@[\]^_`|~ <br/>
                    ERROR! ERROR! ERR0R! 1N#0RM^T10N N0T F0UND <br/>
                    FILE NOT FOUND. PLEASE CONTACT AN ADMINISTRATOR. <br/>
                    [DATA EXPUNGED]
                    <br/> [REDACTED]
                    <br/> ACCESS DENIED...
                </p>
            </div>
        </Tabs.Content>
    );
};

