import { Provider } from 'react-redux'
import './App.css'
import MainLayout from './components/MainLayout'
import store from './components/state/configureStore'

function App() {

  return (
    <>
    <Provider store={store}>
    <MainLayout/>
    </Provider>
    </>
  )
}

export default App
