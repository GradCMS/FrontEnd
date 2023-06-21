import { SliderSetting} from "./SliderSetting"
import { GridSetting } from "./GridSetting"
export class Display{
    placeholder!: string;
    type!: string;
    display_template!: string;
    source_page_id!: number;
    slider_setting?: SliderSetting;
    grid_setting?: GridSetting;  

}