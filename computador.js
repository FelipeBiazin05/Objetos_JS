function Computador(desktop, notebook) {
    this.desktop = desktop;
    this.notebook = notebook;
    this.ligar = function() {
        console.log("Power")
    }
}

function ComfiguracaoDesktop (CPU, GPU, MemoriaRAM, armazenamento, teclado, mouse) {
    this.CPU = CPU;
    this.GPU = GPU;
    this.MemoriaRAM = MemoriaRAM;
    this.armazenamento = armazenamento;
    this.teclado = teclado;
    this.mouse = mouse;
}

function ConfiguracaoNotebook (CPU, GPU, MemoriaRAM, armazenamento, touchpad) {
    this.CPU = CPU;
    this.GPU = GPU;
    this.MemoriaRAM = MemoriaRAM;
    this.armazenamento = armazenamento;
    this.touchpad = touchpad;
}

const computadorDoFelipe = new ComfiguracaoDesktop ("Xeon", "Rtx 580", "HyperX 32gb", "SDD 1tb", "HP", "Logitech" );
const notebookDeMaria = new ConfiguracaoNotebook ("Intel i3", "Integrada 2gb", "4gb", "HD 500gb", true);

console.log(computadorDoFelipe);
console.log(notebookDeMaria);