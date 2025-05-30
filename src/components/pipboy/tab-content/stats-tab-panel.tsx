import { Tabs } from "@ark-ui/solid";
import {Component, createSignal} from "solid-js";
import {soundTypes} from "~/lib/sounds";

type PROPS = {

}


const groups = Object.freeze({
    none: "none",
    frontend: "Frontend",
    backend: "Backend",
    databases: "Databases",
    apis: "APIs",
    sdks: "SDKs",
    devops: "DevOps",
    misc: "Misc",
});

const allGroups = Object.entries(groups).filter(
    ([key, value]) => value !== "none"
);

const groupTagsMap = Object.freeze({
    none: [],
    frontend: ["HTML", "CSS", "Javascript / Typescript", "React", "Flutter"],
    backend: ["Dart", "Python", "NodeJS"],
    databases: ["PostgreSQL", "MongoDB", "Firebase Firestore", "Redis"],
    apis: ["REST", "GraphQL", "WebSockets"],
    sdks: [
        "Firebase",
        "Fastify",
        "NextJs",
        "Sequelize",
        "Prisma",
        "Jimp",
        "Pdf-Lib",
        "ChartJS",
        "Redux",
        "Streams",
    ],
    devops: ["Docker", "EC2", "AWS", "Lightsail", "Linux", "Caddy"],
    misc: ["Hasura", "Razorpay", "Git"],
});

const groupTags = Object.entries(groupTagsMap);

const content = {
    Crafted: [
        {
            title: "Ural",
            description: "A screenshot organizer with machine learning",
            link: "https://github.com/purplecandy/ural/tree/master/flutter",
            pointers: [
                "A screenshot organizer that finds your screenshot by its contents.",
                "You can search for the screenshot by describing it like bank statement, amazon, hand bang",
                "Effectively performing OCR in the background and caching to SQLite",
            ],
        },
        {
            title: "Nano",
            description: "A state management library for Flutter",
            link: "https://flutter-nano.surge.sh/",
            pointers: [
                "Nano is a modular state management library with a strict architectural pattern",
                "Predictable, fully asynchronous, terse",
                "Nano is an evolution of all my own state management tools built ever since Flutter was in Alpha.",
            ],
        },
        {
            title: "Kibibyte Drive",
            description: "A microservice for cloning drive files",
            link: "https://github.com/purplecandy/kibibytedrive",
            pointers: [
                "A simple tool developed with React and Node for quickly cloning files between drive accounts",
            ],
        },
    ],
};

const SkillTag = ({ activeGroup, groupName, group = [] }) => {
    if (activeGroup === groupName)
        return (
            <>
                {group.map((name) => (
                    <a class="p-2">{name}</a>
                ))}
            </>
        );
    else
        return (
            <>
                {group.map((name) => (
                    <a class="p-2 disabled">{name}</a>
                ))}
            </>
        );
};



const Skills = () => {
    const [activeGroup, setGroup] = createSignal(groups.none);

    const handleMouseHover = (group) => {
        setGroup(group);
    };

    const handleMouseLeave = () => {
        setGroup(groups.none);
    };

    return (
        <div
            class="tab-pane fade in active show"
            id="skills"
            role="tabpanel"
            aria-labelledby="skills-tab"
        >
            <div class="stats-page">
                <div class="underlined-title d-flex mt-2 justify-content-evenly">
                    {allGroups.map(([groupType, groupName]) => (
                        <a
                            class="mr-2 p-2"
                            onMouseEnter={() => handleMouseHover(groupType)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {groupName}
                        </a>
                    ))}
                </div>
                <div style={{ height: "10vh" }}></div>
                <p style={{ 'text-align': "center", 'font-size': '12' }}>
                    I usually work with a lot more tools but to summaries following are my
                    frequent pick
                </p>
                <div class="container d-flex flex-wrap justify-content-center">
                    {groupTags.map(([group, tags]) => (
                        <SkillTag
                            activeGroup={activeGroup}
                            groupName={group}
                            group={tags}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

const CraftedItem = ({ title, description, pointers, link, isFirst }) => (
    <div class={isFirst ? "carousel-item active" : "carousel-item"}>
        <div class="underlined-title d-flex align-items-center">
            <h4 class="flex-grow-1">
                {title.toUpperCase()}{" "}
                <span>
        </span>
            </h4>
            <div>
                <a
                    class="p-1"
                    data-bs-target="#carousel-crafted"
                    data-bs-slide="prev"
                    role="button"
                >
                    {"<"}
                </a>{" "}
                <a
                    class="p-1"
                    data-bs-target="#carousel-crafted"
                    data-bs-slide="next"
                    role="button"
                >
                    {">"}
                </a>
            </div>
        </div>
        <div class="container mt-2">
            <p>{description}</p>
            <ol>
                {pointers.map((pointer, i) => (
                    <li>{pointer}</li>
                ))}
            </ol>
        </div>
    </div>
);

// Crafted
const Crafted = (props: { data: any }) => {
    return (
        <div
            class="tab-pane fade in"
            id="crafted"
            role="tabpanel"
            aria-labelledby="crafted-tab"
        >
            <div
                id="carousel-crafted"
                class="stats-page carousel slide"
                data-bs-ride="carousel"
            >
                <div class="carousel-inner">
                    {props.data.map((e, i) => (
                        <CraftedItem key={i} isFirst={i === 0} {...e} />
                    ))}
                </div>
            </div>
        </div>
    );
};
// --Crafted



const StatsTabPanel: Component<PROPS> = props => {

    let title: HTMLElement;
    let stimpack: HTMLDivElement;

    return (
        <Tabs.Content value={"stats"}
                      class="tab-pane fade"
                      role="tabpanel"
                      id="stats"
                      aria-labelledby="stats-tab"
        >
            <h3 class="pip-title">Stats</h3>
            <ul class="pip-head">
                <li>
                    <b>LVL</b> 11
                </li>
                <li>
                    <b>HP</b> 89/110
                </li>
                <li>
                    <b>AP</b> 38/40
                </li>
                <li>
                    <b>XP</b> 73.8%
                </li>
            </ul>
            <div class="pip-body">


            </div>
        </Tabs.Content>
    );
};

export default StatsTabPanel;