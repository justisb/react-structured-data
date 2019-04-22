import JSONLDAbstractNode from '../JSONLDAbstractNode';

class MenuSection extends JSONLDAbstractNode {
    getJSON(isFirstChildNode = false, schema) {
        const parseChildren = super.parseChildren();
        const details = {
            '@type': 'MenuSection',
            ...schema
        }
        return isFirstChildNode
            ? Object.assign(details, ...parseChildren)
            : Object.assign({menuSection: details}, ...parseChildren);
    }
}

export default MenuSection;
