const info_images: NodeListOf<Element> = document.querySelectorAll('.info-icon > img');
const menu_images: NodeListOf<Element> = document.querySelectorAll('.menu-attribute-image');
const header_lines: NodeListOf<Element> = document.querySelectorAll('.header-lines');
const vault_boy_walking_image: HTMLElement | null = document.getElementById('vault-boy-walking');
const idf_map_image: HTMLElement | null = document.getElementById('idf-map');
const color_boxes: NodeListOf<Element> = document.querySelectorAll('.color-box');
const color_class_basename: string = 'color-box';
const color_class_active_name: string = 'color-box-active';

/**
 *
 * @var 1: color name
 * @var 2: --pip-boy-primary-color
 * @var 3: --pip-boy-secondary-color
 * @var 4: CCS filter property for info_images + header linesconst
 * @var 5: CCS filter property for menu_images + idf map image
 * @var 6: CCS filter property for vault boy walking image
 */
type ColorTheme = [string, string, string, string, string, string];

const green_default: ColorTheme = ['green_default', '#18dc0c', '#11291b',
            'grayscale(100%) brightness(80%) sepia(100%) hue-rotate(50deg) saturate(1000%) contrast(0.8)',
            'grayscale(100%) brightness(40%) sepia(100%) hue-rotate(50deg) saturate(1000%) contrast(0.8)',
            'grayscale(100%) brightness(60%) sepia(100%) hue-rotate(50deg) saturate(1500%) contrast(0.99)'];
const blue_nuka_cola: ColorTheme = ['blue_nuka_cola', '#2eceff', '#002733',
            'grayscale(100%) brightness(60%) sepia(100%) hue-rotate(500deg) saturate(1000%) contrast(0.8)',
            'grayscale(100%) brightness(40%) sepia(100%) hue-rotate(500deg) saturate(1000%) contrast(0.8)',
            'grayscale(100%) brightness(60%) sepia(100%) hue-rotate(500deg) saturate(1500%) contrast(0.99)'];
const orange_mojave: ColorTheme = ['orange_mojave', '#ffb641', '#1a1000',
            'grayscale(100%) brightness(70%) sepia(100%) hue-rotate(10deg) saturate(1000%) contrast(0.8)',
            'grayscale(100%) brightness(50%) sepia(100%) hue-rotate(10deg) saturate(1000%) contrast(0.8)',
            'grayscale(100%) brightness(90%) sepia(100%) hue-rotate(10deg) saturate(1500%) contrast(0.99)'];
const purple: ColorTheme = ['purple', '#8438f5', '#150330',
            'grayscale(100%) brightness(50%) sepia(100%) hue-rotate(200deg) saturate(1000%) contrast(0.8)',
            'grayscale(100%) brightness(30%) sepia(100%) hue-rotate(210deg) saturate(1000%) contrast(0.8)',
            'grayscale(100%) brightness(40%) sepia(100%) hue-rotate(220deg) saturate(1500%) contrast(0.99)'];
const red: ColorTheme = ['red', '#bb313d', '#280b0d',
            'grayscale(100%) brightness(50%) sepia(100%) hue-rotate(310deg) saturate(1000%) contrast(0.8)',
            'grayscale(100%) brightness(20%) sepia(100%) hue-rotate(310deg) saturate(1000%) contrast(0.8)',
            'grayscale(100%) brightness(40%) sepia(100%) hue-rotate(310deg) saturate(1000%) contrast(0.99)'];
const green_mutant: ColorTheme = ['green_mutant', '#1aff80', '#003317',
            'grayscale(100%) brightness(60%) sepia(100%) hue-rotate(470deg) saturate(1000%) contrast(0.8)',
            'grayscale(100%) brightness(40%) sepia(100%) hue-rotate(470deg) saturate(1000%) contrast(0.8)',
            'grayscale(100%) brightness(50%) sepia(100%) hue-rotate(470deg) saturate(1500%) contrast(0.99)'];
const pink_boy: ColorTheme = ['pink_boy', '#ff00ff', '#330033',
            'grayscale(100%) brightness(70%) sepia(100%) hue-rotate(220deg) saturate(1000%) contrast(0.8)',
            'grayscale(100%) brightness(30%) sepia(100%) hue-rotate(250deg) saturate(1000%) contrast(0.8)',
            'grayscale(100%) brightness(40%) sepia(100%) hue-rotate(250deg) saturate(1500%) contrast(0.99)'];
const night_blue: ColorTheme = ['night_blue', '#0897ff', '#001e33',
            'grayscale(100%) brightness(70%) sepia(100%) hue-rotate(180deg) saturate(1000%) contrast(0.8)',
            'grayscale(100%) brightness(40%) sepia(100%) hue-rotate(180deg) saturate(1000%) contrast(0.8)',
            'grayscale(100%) brightness(50%) sepia(100%) hue-rotate(150deg) saturate(1500%) contrast(0.99)'];
const ice: ColorTheme = ['ice', '#dce0e1', '#171b1c',
            'grayscale(100%) brightness(100%) sepia(0%) hue-rotate(100deg) saturate(10%) contrast(0.9)',
            'grayscale(100%) brightness(90%) sepia(0%) hue-rotate(100deg) saturate(10%) contrast(0.8)',
            'grayscale(100%) brightness(90%) sepia(90%) hue-rotate(100deg) saturate(10%) contrast(0.99)'];
const gold: ColorTheme = ['gold', '#ffd700', '#332b00',
            'grayscale(100%) brightness(90%) sepia(100%) hue-rotate(10deg) saturate(1000%) contrast(0.8)',
            'grayscale(100%) brightness(60%) sepia(100%) hue-rotate(10deg) saturate(1000%) contrast(0.8)',
            'grayscale(100%) brightness(80%) sepia(100%) hue-rotate(15deg) saturate(2000%) contrast(0.99)'];

const color_themes: ColorTheme[] = [green_default, blue_nuka_cola, orange_mojave, purple, red,
    green_mutant, pink_boy, night_blue, ice, gold];


function activeColor(box: Element, 
                     boxes: NodeListOf<Element>, 
                     color_themes: ColorTheme[],
                     box_class_basename: string, 
                     active_box_class: string,
                     info_images: NodeListOf<Element>, 
                     menu_images: NodeListOf<Element>, 
                     vault_boy_walking_image: HTMLElement | null, 
                     idf_map_image: HTMLElement | null): void {
    for (let i=0 ; i < boxes.length ; i++) {
        boxes[i].classList.remove(active_box_class);
    }
    for (let i=0 ; i < color_themes.length ; i++) {
        if(box.id === box_class_basename + '-' + color_themes[i][0] + '') {
            document.getElementById(box_class_basename + '-' + color_themes[i][0])?.
            classList.add(active_box_class);
            // setting text colors
            document.documentElement.style.setProperty('--pip-boy-primary-color', color_themes[i][1]);
            document.documentElement.style.setProperty('--pip-boy-secondary-color', color_themes[i][2]);
            // setting info_images colors with filter CSS property
            for (let j=0 ; j < info_images.length ; j++) {
                (info_images[j] as HTMLElement).style.removeProperty('filter');
                (info_images[j] as HTMLElement).style.setProperty('filter', color_themes[i][3]);
            }
            // setting menu_images colors with filter CSS property
            for (let j=0 ; j < menu_images.length ; j++) {
                (menu_images[j] as HTMLElement).style.removeProperty('filter');
                (menu_images[j] as HTMLElement).style.setProperty('filter', color_themes[i][4]);
            }
            // setting menu_images colors with filter CSS property
            for (let j=0 ; j < header_lines.length ; j++) {
                (header_lines[j] as HTMLElement).style.removeProperty('filter');
                (header_lines[j] as HTMLElement).style.setProperty('filter', color_themes[i][3]);
            }
            // setting vault boy image color with filter CSS property
            if (vault_boy_walking_image) {
                vault_boy_walking_image.style.removeProperty('filter');
                vault_boy_walking_image.style.setProperty('filter', color_themes[i][5]);
            }
            // setting idf map image color with filter CSS property
            if (idf_map_image) {
                idf_map_image.style.removeProperty('filter');
                idf_map_image.style.setProperty('filter', color_themes[i][4]);
            }
        }
    }
}


// processing execution when a mouseover is detected on a color box
for (let i=0 ; i < color_boxes.length ; i++) {
    color_boxes[i].addEventListener('click', function (evt) {
        activeColor(this, color_boxes, color_themes,
            color_class_basename, color_class_active_name,
            info_images, menu_images, vault_boy_walking_image, idf_map_image)
    })
}