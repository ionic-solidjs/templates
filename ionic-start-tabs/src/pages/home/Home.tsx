import {
	IonIcon,
	IonLabel,
	IonTab,
	IonTabBar,
	IonTabButton,
	IonTabs,
} from "@ionic-solidjs/core";
import { iconEllipse, iconSquare, iconTriangle } from "@ionic-solidjs/ionicons";
import { Tab1 } from "./Tab1";
import { Tab2 } from "./Tab2";
import { Tab3 } from "./Tab3";

export const Home = () => {
	return (
		<>
			<IonTabs>
				<IonTab tab="tab1">
					<Tab1 />
				</IonTab>

				<IonTab tab="tab2">
					<Tab2 />
				</IonTab>

				<IonTab tab="tab3">
					<Tab3 />
				</IonTab>

				<IonTabBar slot="bottom">
					<IonTabButton tab="tab1" href="/home/tab1">
						<IonIcon aria-hidden="true" icon={iconTriangle} />
						<IonLabel>Tab 1</IonLabel>
					</IonTabButton>

					<IonTabButton tab="tab2" href="/home/tab2">
						<IonIcon aria-hidden="true" icon={iconEllipse} />
						<IonLabel>Tab 2</IonLabel>
					</IonTabButton>

					<IonTabButton tab="tab3" href="/home/tab3">
						<IonIcon aria-hidden="true" icon={iconSquare} />
						<IonLabel>Tab 3</IonLabel>
					</IonTabButton>
				</IonTabBar>
			</IonTabs>
		</>
	);
};
