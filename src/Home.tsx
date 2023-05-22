import { Ref, defineComponent, onMounted, reactive, ref } from 'vue'
import indexStyle from './index.module.css'
import { useI18n } from 'vue-i18n'
const Home = defineComponent({
  setup() {
    onMounted(() => {
      console.log('Home mounted!')
    })

    function renderUser() {
      return <div>user</div>
    }
    const isShow: Ref<boolean> = ref(true)
    const handleToggleShow = () => {
      isShow.value = !isShow.value
      locale.value = locale.value === 'en' ? 'zh' : 'en'
    }
    const count = reactive([
      { id: 1, name: '张三' },
      { id: 2, name: '李四' },
    ])
    const { locale, t } = useI18n()
    return () => (
      <div>
        <h1>{t('message')}</h1>
        <div v-show={isShow}>show</div>
        {isShow.value && (
          <div>
            <div>111</div>
            <div>222</div>
          </div>
        )}
        {isShow.value ? <div>111</div> : <div>222</div>}
        <button onClick={handleToggleShow}>切换show</button>
        <div class={indexStyle.time}>111</div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank"></a>
        {isShow.value &&
          count.map((item) => <div key={item.id}>{item.name}</div>)}
        {renderUser()}
      </div>
    )
  },
})
export default Home
