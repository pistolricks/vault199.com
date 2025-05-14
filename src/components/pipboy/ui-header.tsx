import {Component} from "solid-js";
import styles from "./css/layout/header.module.css"
type PROPS = {}

const UiHeader: Component<PROPS> = props => {

    return (
        <header class={styles.header}>
            <div>
                <ul class={styles.tabs}>
                    <li class={styles["tab-active"]}><a href="#stat-status-section">STAT</a></li>
                    <li><a href="#exp-jobs-section">EXP</a></li>
                    <li><a href="#data-section">DATA</a></li>
                    <li><a href="#map-section">MAP</a></li>
                    <li><a href="#color-section">COLOR</a></li>
                </ul>
            </div>
            <div class={styles["header-lines"]}>
                <img id="header-line-before" src="img/header_line_before.png" alt="graphical stuff"/>
                <img id="header-line-after" src="img/header_line_after.png" alt="graphical stuff"/>
            </div>
            <div>
                <ul class="tabs sub-tabs sub-header-stat sub-tabs-active">
                    <li class=""><a href="#stat-status-section" class="sub-header-active-tab">STATUS</a></li>
                    <li class=""><a href="#stat-special-section" class="sub-header-inactive-tab-near">SPECIAL</a></li>
                    <li class=""><a href="#stat-perk-section" class="sub-header-inactive-tab-far">PERKS</a></li>
                </ul>
            </div>
            <div>
                <ul class="tabs sub-tabs sub-header-exp">
                    <li class=""><a href="#exp-jobs-section" class="sub-header-active-tab">JOBS</a></li>
                    <li class=""><a href="#exp-studies-section" class="sub-header-inactive-tab-near">STUDIES</a></li>
                    <li class=""><a href="#exp-skills-section" class="sub-header-inactive-tab-far">SKILLS</a></li>
                </ul>
            </div>
            <div>
                <ul class="tabs sub-tabs sub-header-void">
                    <li class=""><a href="#" class="sub-header-active-tab"></a></li>
                    <li class=""><a href="#" class="sub-header-inactive-tab-near"></a></li>
                    <li class=""><a href="#" class="sub-header-inactive-tab-far"></a></li>
                </ul>
            </div>
        </header>
    );
};

export default UiHeader;