import JSONLDAbstractNode from '../JSONLDAbstractNode';

class Menu extends JSONLDAbstractNode {
    getJSON(isFirstChildNode = false, schema) {
        const parseChildren = super.parseChildren();
        const details = {
            '@type': 'Menu',
            ...schema
        }
        return isFirstChildNode
            ? Object.assign(details, ...parseChildren)
            : Object.assign({menu: details}, ...parseChildren);
    }
}

export default Menu;
