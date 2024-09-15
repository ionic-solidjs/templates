import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic-solidjs/core";
import type { Component } from "solid-js";
import { ExploreContainer } from "../../components/ExploreContainer";
// import styles from "./Tab2.module.css";

export const Tab2: Component = () => {
	return (
		<>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Tab 2</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Tab 2</IonTitle>
					</IonToolbar>
				</IonHeader>
				<ExploreContainer name="Tab 2 page" />
			</IonContent>
		</>
	);
};
