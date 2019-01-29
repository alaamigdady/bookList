import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import { PersistGate } from 'redux-persist/lib/integration/react'
import { persistor, store } from './configureStore';
import App from './components/App'

store.subscribe(()=>{
	console.log('done',store.getState())
})

render(
<PersistGate persistor={persistor}>
	<Provider store={store}>
		<App />
    </Provider>
</PersistGate>,
  document.getElementById('root')
)
registerServiceWorker();
