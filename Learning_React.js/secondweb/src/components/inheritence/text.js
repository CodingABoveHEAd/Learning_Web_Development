import Emoji from './emoji'

class Text extends Emoji{
    constructor(props){
        super(props);
    }
    render(){
        const dec=this.addemoji('I am JavaScript Language','<3');
        return super.render(dec);
    }
}

export default Text;