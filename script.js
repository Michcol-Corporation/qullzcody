import Quill from 'quill';
var quill = new Quill('#editor', {
        modules: {
            // konfiguracja paska narzędzi
            toolbar: [['code-block']]
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
