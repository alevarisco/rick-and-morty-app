"use client";
import { TopMenu } from "@/components";
import { Provider } from 'react-redux'
import { store } from '../../store/store';

export default function Main({children}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <main className="min-h-screen">
        <TopMenu/>
        <div className="px-0 sm:px-10">
          {children}
        </div>
      </main>
    </Provider>
  );
}
