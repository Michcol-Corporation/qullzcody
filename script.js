import Quill from 'quill';
var quill = new Quill('#editor', {
        modules: {
            // konfiguracja paska narzędzi
            toolbar: [['header']],
            header: [[1, 2, 3, 4, 5, 6, false]],
            font: [],
            size: [],
            bold: 'bold',
            italic: 'italic',
            underline: 'underline',
            strike: 'strike',
            color: [],
            background: [],
            script: ['sub', 'super'],
            header: [1, 2],
            list: ['ordered', 'bullet'],
            indent: ['-1', '+1'],
            direction: 'rtl',
            align: [],
            clean: []     
        },
        theme: 'snow' 
    });
    quill.keyboard.addBinding({
        key: 'K',
        shortKey: true,  
        handler: function(range, context) {
            // formatowanie do kodu
        } 
    });
