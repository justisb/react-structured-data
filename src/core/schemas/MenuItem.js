import JSONLDAbstractNode from '../JSONLDAbstractNode';

class MenuItem extends JSONLDAbstractNode {
    getJSON(isFirstChildNode = false, schema) {
        const parseChildren = super.parseChildren();
        const details = {
            '@type': 'MenuItem',
            ...schema
        }
        return isFirstChildNode
            ? Object.assign(details, ...parseChildren)
            : Object.assign({menuItem: details}, ...parseChildren);
    }
}

export default MenuItem;
