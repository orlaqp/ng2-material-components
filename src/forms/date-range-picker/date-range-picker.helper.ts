//html template for the picker UI
export const pickerTemplate: string = `

<div class="daterangepicker dropdown-menu">
    <div class="calendar left">

        <div class="daterangepicker_input input-group form-group">
            <span class="input-group-addon">
                <i class="zmdi zmdi-calendar"></i>
                <div class="calendar-time">
                    <div></div>
                    <i class="zmdi zmdi-time"></i>
                </div>
            </span>
            <div class="dtp-container fg-line">
                <input class="form-control" type="text" name="daterangepicker_start">
            </div>
        </div>

        <div class="calendar-table"></div>
    </div>
    <div class="calendar right">

        <div class="daterangepicker_input input-group form-group">
            <span class="input-group-addon">
                <i class="zmdi zmdi-calendar"></i>
                <div class="calendar-time">
                    <div></div>
                    <i class="zmdi zmdi-time"></i>
                </div>
            </span>
            <div class="dtp-container fg-line">
                <input class="form-control" type="text" name="daterangepicker_end">
            </div>
        </div>

        <div class="calendar-table"></div>
    </div>
    <div class="ranges">
        <div class="range_inputs">
            <button class="applyBtn" disabled="disabled" type="button"></button>
            <button class="cancelBtn" type="button"></button>
        </div>
    </div>
</div>
`;
