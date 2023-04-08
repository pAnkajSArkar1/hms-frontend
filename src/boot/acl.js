import { boot } from 'quasar/wrappers'
import { useAuthStore } from "stores/auth/index";

const acl = {
    hasAccess(action) {
        var allowedAccess = false
        const authStore = useAuthStore();

        var allowedAccess = false

        if (authStore.authUserGetter && authStore.authUserGetter.acl) {
            if (authStore.authUserGetter.acl[action])
                allowedAccess = true
        }
        return allowedAccess
    }
}

export default boot(({ app }) => {
    app.config.globalProperties.$acl = acl
})

export { acl }