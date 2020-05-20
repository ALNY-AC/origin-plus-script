let str = `

<div id="app">
    <div class="title">{{title}}</div>
    <div class="add_time">{{add_time}}</div>
    <div class="label">
        <div>
            {{info.label}}
        </div>
        <div>
            {{info.label2}}
        </div>
    </div>
</div>
`

let obj = {

    init() {

        let reg, a;
        reg = /\{\{(.*)\}\}/g;
        a = str.match(reg);
        console.warn(a);
    },
}

obj.init();

