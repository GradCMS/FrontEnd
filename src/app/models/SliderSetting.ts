export interface SliderSetting {
    slides_per_row: number;
    slides_per_column: number;
    total_slides: number;
    slides_spacing: number;
    center_slides: 1 | 0;
    loop_slides: 1 | 0;
    auto_height: 1 | 0;
    stretch_height: 1 | 0;
    auto_play: 1 | 0;
    arrows: 1 | 0;
    bullets: 1 | 0;
    class_id: number;
    animation: string;
    effect_speed_ms: number;
  }