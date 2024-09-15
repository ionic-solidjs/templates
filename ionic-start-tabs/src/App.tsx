import { IonApp, IonRoute, IonRouteRedirect, IonRouter, IonRouterOutlet, setupIonicSolid } from "@ionic-solidjs/core";
import type { Component } from "solid-js";
import { Home } from "./pages/home/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/core/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/core/css/normalize.css";
import "@ionic/core/css/structure.css";
import "@ionic/core/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/core/css/padding.css";
import "@ionic/core/css/float-elements.css";
import "@ionic/core/css/text-alignment.css";
import "@ionic/core/css/text-transformation.css";
import "@ionic/core/css/flex-utils.css";
import "@ionic/core/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/core/css/palettes/dark.always.css'; */
/* import '@ionic/core/css/palettes/dark.class.css'; */
import "@ionic/core/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicSolid();

export const App: Component = () => (
	<IonApp>
		<IonRouter useHash={false}>
			{/* Default route to Home */}
			<IonRouteRedirect from="/" to="/home/tab1" />

			{/* Home page with tabs */}
			<IonRoute url="/home" component={Home}>
				{/* Default tab when url is just `/home` without tab segment */}
				<IonRoute component="tab1" />

				{/* Tab sub-routes */}
				<IonRoute url="/tab1" component="tab1" />
				<IonRoute url="/tab2" component="tab2" />
				<IonRoute url="/tab3" component="tab3" />
			</IonRoute>
		</IonRouter>

		<IonRouterOutlet />
	</IonApp>
);
