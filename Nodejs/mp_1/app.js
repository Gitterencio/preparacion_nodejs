const readline = require('readline');
const Messages = require('./message');
const Document  = require('./document');
const Directory = require('./directory');

const dir = new Directory();

let interface = readline.createInterface(process.stdin,process.stdout);

const tools =`comandos :q = salir, :sa = guardar como, :s = guardar
===================================================================`;

const pantalla =`
                    ==================
                    Editor de texto.\n
                    ==================
                    Elige una opcion:\n
                    1 Crear Nuevo Documento
                    2 Abrir Documento
                    3 Cerrar Editor\n> `;

mainScreen();

function mainScreen(){
    process.stdout.write('\033c');

    interface.question(pantalla,(res) =>{
        switch(res.trim()){
            case '1':
                createFile();
                break;
            case '2':
                openFile();
                    break;
            case '3':
                interface.close();
                break;
            
            default:
                mainScreen();
                
        }
    });
}

function createFile(){
    let file = new Document(dir.getPath());
    renderInterface(file);
    readCommands(file);
};

function openFile(){
    let file = new Document(dir.getPath());
    dir.getFilesInDir();

    interface.question(Messages.requestFileName, name =>{
        if(file.exists(name)){
            openFileE(file,name);
        }else{
            console.log(Messages.fileNotFound);
            setTimeout(()=>{
            interface.removeAllListeners('line');
            mainScreen();
            },2000);

        }
    })
};

function openFileE(file,name){
    file.open(name);
    renderInterface(file);
    readCommands(file);
};

function renderInterface(file,mensaje){
    process.stdout.write('\033c');
    (file.getName() == '') ? console.log(`| Untitle |`) : console.log(`|${file.getName} |`);
    console.log(tools);
    if(mensaje != null) console.log(mensaje);
    console.log( file.getContent());
};

function readCommands(file){
    interface.on('line',(input) =>{
        switch(input.trim()){
            case ':sa':
                saveas(file);
                break;
            case ':s':
               save(file);
                    break;
            case ':q':
                interface.removeAllListeners('line');
                mainScreen();
                break;
            
            default:
                file.append(input.trim());
                
        }
    });
};

function saveas(file){
    interface.question(Messages.requestFileName, (name) =>{
        if(file.exists(name)){
            console.log(Messages.fileExists);
            interface.question(Messages.replaceFile, confirm =>{
                if(confirm = 'y'){
                    file.saveas(name);
                    renderInterface(file, Messages.fileSaved +'\n');
                }else{
                    file.saveas(name);
                    renderInterface(file, Messages.fileNotSaved + '\n');

                }
            })
        }else{
            //el archivo no existe
            file.saveas(name);
            renderInterface(file, Messages.fileSaved +'\n');
        }
    })
};

function save(file){
    if(file.hasName()){
        file.save();
        renderInterface(file, Messages.fileSaved +'\n');
    }else{
        saveas(file);
    }
    
};