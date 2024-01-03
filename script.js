// Inicjalizacja Quill
var quill = new Quill('#editor', {
    theme: 'snow'
});

// Funkcja do pobierania i wyświetlania treści edytora
function showContent() {
    var content = quill.root.innerHTML;
    alert(content);
}

// Funkcja do zapisywania treści edytora do schowka
function saveContent() {
    var content = quill.root.innerHTML;
    navigator.clipboard.writeText(content).then(function() {
        alert('Treść zapisana w schowku!');
    }, function(err) {
        console.error('Nie udało się zapisać treści: ', err);
    });
}
// Selektor dla elementu, który chcesz obserwować
const targetNode = document.getElementById('editor');

// Upewnij się, że węzeł istnieje, zanim spróbujesz go obserwować
if (targetNode) {
    // Opcje konfiguracyjne dla obserwatora
    const config = { attributes: true, childList: true, subtree: true };

    // Callback, który zostanie wykonany, gdy zaobserwowane zostaną zmiany
    const callback = function(mutationsList, observer) {
        for(const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                console.log('Dodano lub usunięto węzeł potomny!');
            } else if (mutation.type === 'attributes') {
                console.log(`Zmieniono atrybuty: ${mutation.attributeName}`);
            }
        }
    };

    // Tworzenie instancji MutationObserver z podanym callbackiem
    const observer = new MutationObserver(callback);

    // Rozpoczęcie obserwacji węzła docelowego z zadaną konfiguracją
    observer.observe(targetNode, config);

    // Później, możesz zatrzymać obserwację
    // observer.disconnect();
}
// Rejestrowanie zdarzeń dla przycisków
document.getElementById('get-content').addEventListener('click', showContent);
document.getElementById('save-content').addEventListener('click', saveContent);

// Reagowanie na zmiany treści
quill.on('text-change', function(delta, oldDelta, source) {
    if (source == 'user') {
        console.log("Treść się zmieniła!", delta);
    }
});