import Vue from 'vue';

Vue.directive('linkable', {
    bind(el, binding, vnode) {
        const component = vnode.context;

        el.linkableClick = (e) => {
            // internet explorer doesn't natively support click event
            // paths, so we'll need to fake it by manually walking
            // up the dom tree until we find our document body.
            if (typeof e.path === 'undefined') {
                const path = [];
                let node = e.target;

                while (node !== document.body) {
                    path.push(node);
                    node = node.parentNode;
                }

                e.path = path;
            }
            
            for (const clickedElement of e.path) {
                if (clickedElement === el || clickedElement.tagName === 'A') {
                    if (clickedElement.hostname === window.location.hostname) {
                        e.preventDefault();
                        component.$router.push(clickedElement.pathname);
                    }
                    break;
                }
            }
        };

        el.addEventListener('click', el.linkableClick);
    },
    unbind(el) {
        el.removeEventListener('click', el.linkableClick);
    },
});
