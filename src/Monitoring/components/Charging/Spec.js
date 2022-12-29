import React from "react";
import { useLocation } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Spec = () => {
	const location = useLocation();
	const specChartInfo = location.state.specTableData;

	return (
		//
		<div className='spec_table'>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label='simple table'>
					<TableBody>
						<TableRow>
							<TableCell>충전소명</TableCell>
							<TableCell>{specChartInfo.stationName}</TableCell>
						</TableRow>

						<TableRow>
							<TableCell>주소</TableCell>
							<TableCell>{specChartInfo.address}kW</TableCell>
						</TableRow>

						<TableRow>
							<TableCell>충전사업자</TableCell>
							<TableCell>한국전력공사</TableCell>
						</TableRow>

						<TableRow>
							<TableCell>연락처</TableCell>
							<TableCell>{specChartInfo.contact}</TableCell>
						</TableRow>

						<TableRow>
							<TableCell>설치날짜</TableCell>
							<TableCell>{specChartInfo.install}</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default Spec;
