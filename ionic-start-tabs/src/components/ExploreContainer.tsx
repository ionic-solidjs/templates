import type { Component } from "solid-js";
import styles from "./ExploreContainer.module.css";

type ContainerProps = {
	name: string;
};

export const ExploreContainer: Component<ContainerProps> = (props) => {
	return (
		<div class={styles.container}>
			<strong>{props.name}</strong>
			<p>
				Explore{" "}
				<a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">
					UI Components
				</a>
			</p>
		</div>
	);
};
