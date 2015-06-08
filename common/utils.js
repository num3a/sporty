/**
 * Created by emmanuelernest on 08/06/15.
 */
RegExp.escape = function(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};