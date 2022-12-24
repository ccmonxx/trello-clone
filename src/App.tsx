import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "./atoms";

function App() {
	const [minutes, setMinutes] = useRecoilState(minuteState);
	const [hours, setHours] = useRecoilState(hourSelector);
	// useRecoilValue : 단수의 상태에 접근할 경우
	// const hours = useRecoilValue(hourSelector);
	const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
		setMinutes(+event.currentTarget.value);
	};
	const onHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
		setHours(+event.currentTarget.value);
	};
	return (
		<div>
			<input
				value={minutes}
				onChange={onMinutesChange}
				type="number"
				placeholder="minutes"
			/>
			<input
				value={hours}
				onChange={onHoursChange}
				type="number"
				placeholder="hours"
			/>
		</div>
	);
}

export default App;
