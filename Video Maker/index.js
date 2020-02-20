function start(){
    const content = {}
    content.searchTerm = askAndReturnSearchTerm()
    function askAndReturnSearchTerm(){
        return 'TERMO DE BUSCA'
    }
    console.log(content)
}
start()
