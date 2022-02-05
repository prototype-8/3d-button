import { Component, createSignal } from 'solid-js';
import styles from './App.module.scss';


const App: Component = () => {
  const [getHasActivated, setHasActivated] = createSignal(false);

  const toggleButtonState = () => {
    setHasActivated(!getHasActivated());
  }

  return <>
    <button
      class={styles['td-button'] + (getHasActivated() ? ' active' : '')}
      onClick={toggleButtonState}
      aria-label="3d-button"
    >
      <div class={styles['td-left']}></div>
      <div class={styles['td-body']}>
        <svg xmlns="http://www.w3.org/2000/svg" class={styles['td-icon']} viewBox="0 0 24 24" aria-hidden="true" aria-role="img"><path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"/></svg>
      </div>
      <div class={styles['td-right']}></div>
    </button>
  </>;
};

export default App;
