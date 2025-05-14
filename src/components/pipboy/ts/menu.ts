const special_attribute_boxes: NodeListOf<Element> = document.querySelectorAll('.special-attribute-box');
const special_attribute_descriptions: NodeListOf<Element> = document.querySelectorAll('.special-attribute-description');
const special_attribute_images: NodeListOf<Element> = document.querySelectorAll('.special-attribute-image');
const special_attribute_names: string[] = ['strength', 'perception', 'endurance',
    'charisma', 'intelligence', 'agility', 'luck'];
const special_attribute_class_basenames: string[] = ['special-attribute-box',
    'special-attribute-description', 'special-attribute-image'];
const special_attribute_class_active_names: string[] = ['special-attribute-box-active',
    'special-attribute-description-active', 'special-attribute-image-active'];


const perk_attribute_boxes: NodeListOf<Element> = document.querySelectorAll('.perk-attribute-box');
const perk_attribute_descriptions: NodeListOf<Element> = document.querySelectorAll('.perk-attribute-description');
const perk_attribute_images: NodeListOf<Element> = document.querySelectorAll('.perk-attribute-image');
const perk_attribute_names: string[] = ['chemist', 'cannibal', 'fortune_finder', 'idiot_savant', 'nerd_rage', 'heavy-gunner'];
const perk_attribute_class_basenames: string[] = ['perk-attribute-box',
    'perk-attribute-description', 'perk-attribute-image'];
const perk_attribute_class_active_names: string[] = ['perk-attribute-box-active',
    'perk-attribute-description-active', 'perk-attribute-image-active'];


const job_attribute_boxes: NodeListOf<Element> = document.querySelectorAll('.job-attribute-box');
const job_attribute_descriptions: NodeListOf<Element> = document.querySelectorAll('.job-attribute-description');
const job_attribute_names: string[] = ['job_1', 'job_2', 'job_3', 'job_4'];
const job_attribute_class_basenames: string[] = ['job-attribute-box',
    'job-attribute-description'];
const job_attribute_class_active_names: string[] = ['job-attribute-box-active',
    'job-attribute-description-active'];


const study_attribute_boxes: NodeListOf<Element> = document.querySelectorAll('.study-attribute-box');
const study_attribute_descriptions: NodeListOf<Element> = document.querySelectorAll('.study-attribute-description');
const study_attribute_names: string[] = ['study_1', 'study_2', 'study_3', 'study_4', 'study_5'];
const study_attribute_class_basenames: string[] = ['study-attribute-box',
    'study-attribute-description'];
const study_attribute_class_active_names: string[] = ['study-attribute-box-active',
    'study-attribute-description-active'];


const skill_attribute_boxes: NodeListOf<Element> = document.querySelectorAll('.skill-attribute-box');
const skill_attribute_descriptions: NodeListOf<Element> = document.querySelectorAll('.skill-attribute-description');
const skill_attribute_names: string[] = ['skill_1', 'skill_2', 'skill_3', 'skill_4', 'skill_5', 'skill_6', 'skill_7'];
const skill_attribute_class_basenames: string[] = ['skill-attribute-box',
    'skill-attribute-description'];
const skill_attribute_class_active_names: string[] = ['skill-attribute-box-active',
    'skill-attribute-description-active'];


const data_attribute_boxes: NodeListOf<Element> = document.querySelectorAll('.data-attribute-box');
const data_attribute_descriptions: NodeListOf<Element> = document.querySelectorAll('.data-attribute-description');
const data_attribute_names: string[] = ['data_1', 'data_2', 'data_3', 'data_4', 'data_5', 'data_6', 'data_7', 'data_8'];
const data_attribute_class_basenames: string[] = ['data-attribute-box',
    'data-attribute-description'];
const data_attribute_class_active_names: string[] = ['data-attribute-box-active',
    'data-attribute-description-active'];


function activeMenuWithImages(box: Element,
                    boxes: NodeListOf<Element>, 
                    descriptions: NodeListOf<Element>, 
                    images: NodeListOf<Element>,
                    attribute_names: string[],
                    box_class_basename: string, 
                    description_class_basename: string, 
                    image_class_basename: string,
                    active_box_class: string, 
                    active_description_class: string, 
                    active_image_class: string): void {
    for (let i=0 ; i < boxes.length ; i++) {
        boxes[i].classList.remove(active_box_class);
    }
    for (let i=0 ; i < descriptions.length ; i++) {
        descriptions[i].classList.remove(active_description_class);
    }
    for (let i=0 ; i < images.length ; i++) {
        images[i].classList.remove(active_image_class);
    }
    for (let i=0 ; i < attribute_names.length ; i++) {
        if(box.id === box_class_basename + '-' + attribute_names[i] + '') {
            document.getElementById(box_class_basename + '-' + attribute_names[i])?.
            classList.add(active_box_class);
            document.getElementById(description_class_basename + '-' + attribute_names[i])?.
            classList.add(active_description_class);
            document.getElementById(image_class_basename + '-' + attribute_names[i])?.
            classList.add(active_image_class);
        }
    }
}


function activeMenu(box: Element,
                    boxes: NodeListOf<Element>, 
                    descriptions: NodeListOf<Element>,
                    attribute_names: string[],
                    box_class_basename: string, 
                    description_class_basename: string,
                    active_box_class: string, 
                    active_description_class: string): void {
    for (let i=0 ; i < boxes.length ; i++) {
        boxes[i].classList.remove(active_box_class);
    }
    for (let i=0 ; i < descriptions.length ; i++) {
        descriptions[i].classList.remove(active_description_class);
    }
    for (let i=0 ; i < attribute_names.length ; i++) {
        if(box.id === box_class_basename + '-' + attribute_names[i] + '') {
            document.getElementById(box_class_basename + '-' + attribute_names[i])?.
            classList.add(active_box_class);
            document.getElementById(description_class_basename + '-' + attribute_names[i])?.
            classList.add(active_description_class);
        }
    }
}


// processing execution when a mouseover is detected on a special attribute box
for (let i=0 ; i < special_attribute_boxes.length ; i++) {
    special_attribute_boxes[i].addEventListener('mouseover', function (evt) {
        activeMenuWithImages(this,
            special_attribute_boxes,
            special_attribute_descriptions,
            special_attribute_images,
            special_attribute_names,
            special_attribute_class_basenames[0],
            special_attribute_class_basenames[1],
            special_attribute_class_basenames[2],
            special_attribute_class_active_names[0],
            special_attribute_class_active_names[1],
            special_attribute_class_active_names[2])

    })
}


// processing execution when a mouseover is detected on a perk attribute box
for (let i=0 ; i < perk_attribute_boxes.length ; i++) {
    perk_attribute_boxes[i].addEventListener('mouseover', function (evt) {
        activeMenuWithImages(this,
            perk_attribute_boxes,
            perk_attribute_descriptions,
            perk_attribute_images,
            perk_attribute_names,
            perk_attribute_class_basenames[0],
            perk_attribute_class_basenames[1],
            perk_attribute_class_basenames[2],
            perk_attribute_class_active_names[0],
            perk_attribute_class_active_names[1],
            perk_attribute_class_active_names[2])
    })
}


// processing execution when a mouseover is detected on a job attribute box
for (let i=0 ; i < job_attribute_boxes.length ; i++) {
    job_attribute_boxes[i].addEventListener('mouseover', function (evt) {
        activeMenu(this,
            job_attribute_boxes,
            job_attribute_descriptions,
            job_attribute_names,
            job_attribute_class_basenames[0],
            job_attribute_class_basenames[1],
            job_attribute_class_active_names[0],
            job_attribute_class_active_names[1])
    })
}


// processing execution when a mouseover is detected on a study attribute box
for (let i=0 ; i < study_attribute_boxes.length ; i++) {
    study_attribute_boxes[i].addEventListener('mouseover', function (evt) {
        activeMenu(this,
            study_attribute_boxes,
            study_attribute_descriptions,
            study_attribute_names,
            study_attribute_class_basenames[0],
            study_attribute_class_basenames[1],
            study_attribute_class_active_names[0],
            study_attribute_class_active_names[1])
    })
}


// processing execution when a mouseover is detected on a skill attribute box
for (let i=0 ; i < skill_attribute_boxes.length ; i++) {
    skill_attribute_boxes[i].addEventListener('mouseover', function (evt) {
        activeMenu(this,
            skill_attribute_boxes,
            skill_attribute_descriptions,
            skill_attribute_names,
            skill_attribute_class_basenames[0],
            skill_attribute_class_basenames[1],
            skill_attribute_class_active_names[0],
            skill_attribute_class_active_names[1])
    })
}

// processing execution when a mouseover is detected on a data attribute box
for (let i=0 ; i < data_attribute_boxes.length ; i++) {
    data_attribute_boxes[i].addEventListener('mouseover', function (evt) {
        activeMenu(this,
            data_attribute_boxes,
            data_attribute_descriptions,
            data_attribute_names,
            data_attribute_class_basenames[0],
            data_attribute_class_basenames[1],
            data_attribute_class_active_names[0],
            data_attribute_class_active_names[1])
    })
}