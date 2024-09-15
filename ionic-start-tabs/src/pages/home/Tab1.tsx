import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic-solidjs/core";
import type { Component } from "solid-js";
import { ExploreContainer } from "../../components/ExploreContainer";
// import styles from "./Tab1.module.css";

export const Tab1: Component = () => {
	return (
		<>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Tab 1</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Tab 1</IonTitle>
					</IonToolbar>
				</IonHeader>
				<ExploreContainer name="Tab 1 page" />
			</IonContent>
		</>
	);
};
