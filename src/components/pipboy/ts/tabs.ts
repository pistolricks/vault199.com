const stat_tabs_ids: string[] = ['stat-status-section', 'stat-special-section', 'stat-perk-section'];
const exp_tabs_ids: string[] = ['exp-jobs-section', 'exp-studies-section', 'exp-skills-section'];
const data_tab_id: string = 'data-section';
const map_tab_id: string = 'map-section';
const color_tab_id: string = 'color-section';

const header_line_before: HTMLElement | null = document.getElementById('header-line-before');
const header_line_after: HTMLElement | null = document.getElementById('header-line-after');

const tabs: NodeListOf<Element> = document.querySelectorAll('.tabs a');
let current_active_section: Element = document.querySelector('.core-display.core-display-active') as Element;

/* management of tab navigation...
... and display of section contents*/
let displayTabs = function (a: HTMLAnchorElement): boolean {
    let li: HTMLElement = a.parentNode as HTMLElement;
    let anchor: string = a.getAttribute('href') || '';
    // in case where we click on the tab that is already active
    if (li.classList.contains('active')) {
        return false;
    }
    // TABS
    // remove .tab-active class from the previous active tab
    const activeTab = document.querySelector('.tabs .tab-active');
    if (activeTab) {
        activeTab.classList.remove('tab-active');
    }
    // add .tab-active class from the current active tab
    li.classList.add('tab-active');
    // SECTIONS
    // remove .core-display-active class from the current active section
    current_active_section.classList.remove('core-display-active');
    // add .core-display-active class on the new active section
    const newActiveSection = document.getElementById(anchor.substring(1));
    if (newActiveSection) {
        newActiveSection.classList.add('core-display-active');
    }
    // change current_active_session
    const updatedActiveSection = document.querySelector('.core-display.core-display-active');
    if (updatedActiveSection) {
        current_active_section = updatedActiveSection;
    }
    return true;
}


/* management of subtabs switching */
function switchSubTabs(): void {
    if(stat_tabs_ids.includes(current_active_section.id)) {
        const activeSubTab = document.querySelector('.sub-tabs-active');
        if (activeSubTab) {
            activeSubTab.classList.remove('sub-tabs-active');
        }
        const statSubHeader = document.querySelector('.sub-header-stat');
        if (statSubHeader) {
            statSubHeader.classList.add('sub-tabs-active');
        }
    } else if(exp_tabs_ids.includes(current_active_section.id)) {
        const activeSubTab = document.querySelector('.sub-tabs-active');
        if (activeSubTab) {
            activeSubTab.classList.remove('sub-tabs-active');
        }
        const expSubHeader = document.querySelector('.sub-header-exp');
        if (expSubHeader) {
            expSubHeader.classList.add('sub-tabs-active');
        }
    } else {
        const activeSubTab = document.querySelector('.sub-tabs-active');
        if (activeSubTab) {
            activeSubTab.classList.remove('sub-tabs-active');
        }
        const voidSubHeader = document.querySelector('.sub-header-void');
        if (voidSubHeader) {
            voidSubHeader.classList.add('sub-tabs-active');
        }
    }
}


/* management of subtabs opacity */
function switchOpacitySubTabs(a: HTMLAnchorElement): void {
    let section: string = a.getAttribute('href')?.substring(1) || '';
    let current_sub_tabs_active: Element | null = document.querySelector('.sub-tabs-active');
    if (!current_sub_tabs_active) return;
    
    let tabs_a: NodeListOf<Element> = current_sub_tabs_active.querySelectorAll('li > a');
    for (let i=0 ; i < tabs_a.length ; i++) {
        tabs_a[i].classList.remove('sub-header-active-tab',
            'sub-header-inactive-tab-near', 'sub-header-inactive-tab-far');
        switch (section) {
            case stat_tabs_ids[0]:
            case exp_tabs_ids[0]:
                tabs_a[0].classList.add('sub-header-active-tab');
                tabs_a[1].classList.add('sub-header-inactive-tab-near');
                tabs_a[2].classList.add('sub-header-inactive-tab-far');
                break;
            case stat_tabs_ids[1]:
            case exp_tabs_ids[1]:
                tabs_a[0].classList.add('sub-header-inactive-tab-near');
                tabs_a[1].classList.add('sub-header-active-tab');
                tabs_a[2].classList.add('sub-header-inactive-tab-near');
                break;
            case stat_tabs_ids[2]:
            case exp_tabs_ids[2]:
                tabs_a[0].classList.add('sub-header-inactive-tab-far');
                tabs_a[1].classList.add('sub-header-inactive-tab-near');
                tabs_a[2].classList.add('sub-header-active-tab');
                break;
        }
    }
}


/* management of header lines display */
function displayHeaderLines(a: HTMLAnchorElement): void {
    let section: string = a.getAttribute('href')?.substring(1) || '';
    if (!header_line_before || !header_line_after) return;
    
    switch (section) {
        case stat_tabs_ids[0]:
        case stat_tabs_ids[1]:
        case stat_tabs_ids[2]:
            header_line_before.style.left = '-51.5rem';
            header_line_after.style.left = '5rem';
            break;
        case exp_tabs_ids[0]:
        case exp_tabs_ids[1]:
        case exp_tabs_ids[2]:
            header_line_before.style.left = '-43rem';
            header_line_after.style.left = '12.5rem';
            break;
        case data_tab_id:
            header_line_before.style.left = '-35.5rem';
            header_line_after.style.left = '21rem';
            break;
        case map_tab_id:
            header_line_before.style.left = '-27rem';
            header_line_after.style.left = '28.5rem';
            break;
        case color_tab_id:
            header_line_before.style.left = '-19.5rem';
            header_line_after.style.left = '38.0rem';
            break;
    }
}


// execution of navigation tabs
for (let i=0 ; i < tabs.length ; i++) {
    tabs[i].addEventListener('click', function (evt) {
        displayTabs(this as HTMLAnchorElement);
        switchSubTabs();
        switchOpacitySubTabs(this as HTMLAnchorElement);
        displayHeaderLines(this as HTMLAnchorElement);
    })
}


// in case of page refresh (we want to keep the current display !)
const hash: string = window.location.hash;
const a: HTMLAnchorElement | null = document.querySelector('a[href="' + hash + '"]') as HTMLAnchorElement | null;
if(a !== null && !a.classList.contains('active')) {
    displayTabs(a);
    switchSubTabs();
    switchOpacitySubTabs(a);
    displayHeaderLines(a);
}