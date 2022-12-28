import React from "react";
import { useSelector } from "react-redux";

const Spec = () => {
	const specChartInfo = useSelector((state) => state.specChart.info);

	console.log(specChartInfo);
	return (
		<table>
			<tr>
				<th>충전소명</th>
				<td>{specChartInfo.stationName}</td>
			</tr>
			<tr>
				<th>주소</th>
				<td>{specChartInfo.address}</td>
			</tr>
			<tr>
				<th>충전사업자</th>
				<td>한국전력공사</td>
			</tr>
			<tr>
				<th>연락처</th>
				<td>{specChartInfo.contact}</td>
			</tr>
			<tr>
				<th>설치날짜</th>
				<td>{specChartInfo.install}</td>
			</tr>
		</table>
	);
};

export default Spec;
