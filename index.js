module.exports = function archy (obj, prefix) {
    if (prefix === undefined) prefix = '';
    if (typeof obj === 'string') obj = { label : obj };
    var nodes = obj.nodes || [];
    var lines = (obj.label || '').split('\n');
    var splitter = '\n' + prefix + (nodes.length ? '│' : ' ') + ' ';
    
    return prefix
        + lines.join(splitter) + '\n'
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
