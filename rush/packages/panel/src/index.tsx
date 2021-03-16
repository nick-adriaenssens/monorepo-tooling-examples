import * as React from 'react';
import { Header } from "@my-org/header";
import './panel.css';
import { FunctionComponent } from "react";

type PanelProps = {
    title: string;
}

export const Panel: FunctionComponent<PanelProps> = ({ title, children }) => {
  return (
    <div className="panel">
        <Header title={title}/>

        <div className="panel-content">
            { children }
        </div>
    </div>
  );
};
