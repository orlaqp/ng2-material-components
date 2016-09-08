//html template for the picker UI
export const pickerTemplate: string = `
    <div class="daterangepicker dropdown-menu"> +
            <div class="calendar left"> +
                <div class="daterangepicker_input"> +
                  <input class="input-mini form-control" type="text" name="daterangepicker_start" value="" /> +
                  <i class="fa fa-calendar glyphicon glyphicon-calendar"></i> +
                  <div class="calendar-time"> +
                    <div></div> +
                    <i class="fa fa-clock-o glyphicon glyphicon-time"></i> +
                  </div> +
                </div> +
                <div class="calendar-table"></div> +
            </div> +
            <div class="calendar right"> +
                <div class="daterangepicker_input"> +
                  <input class="input-mini form-control" type="text" name="daterangepicker_end" value="" /> +
                  <i class="fa fa-calendar glyphicon glyphicon-calendar"></i> +
                  <div class="calendar-time"> +
                    <div></div> +
                    <i class="fa fa-clock-o glyphicon glyphicon-time"></i> +
                  </div> +
                </div> +
                <div class="calendar-table"></div> +
            </div> +
            <div class="ranges"> +
                <div class="range_inputs"> +
                    <button class="applyBtn" disabled="disabled" type="button"></button>  +
                    <button class="cancelBtn" type="button"></button> +
                </div> +
            </div> +
        </div>;
`;
