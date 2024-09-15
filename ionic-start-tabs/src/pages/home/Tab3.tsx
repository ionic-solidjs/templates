import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic-solidjs/core";
import type { Component } from "solid-js";
import { ExploreContainer } from "../../components/ExploreContainer";
// import styles from "./Tab3.module.css";

export const Tab3: Component = () => {
	return (
		<>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Tab 3</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Tab 3</IonTitle>
					</IonToolbar>
				</IonHeader>
				<ExploreContainer name="Tab 3 page" />
			</IonContent>
		</>
	);
};
