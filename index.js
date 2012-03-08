module.exports = function archy (obj, prefix) {
    if (prefix === undefined) prefix = '';
    if (typeof obj === 'string') obj = { label : obj };
    var nodes = obj.nodes || [];
    
    return prefix
        + (obj.label || '') + '\n'
        + nodes.map(function (node, ix) {
            var last = ix === nodes.length - 1;
            var more = node.nodes && node.nodes.length;
            var prefix_ = prefix + (last ? ' ' : '│') + ' ';
            
            return prefix
                + (last ? '└' : '├') + '─'
                + (more ? '┬' : '─') + ' '
                + archy(node, prefix_).slice(prefix.length + 2)
            ;
        }).join('')
    ;
};
