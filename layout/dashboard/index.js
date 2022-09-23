import { Box, List } from "@chakra-ui/layout";

const DashboardLayout = ({children,  }) => {
	return (
		<Box>

			<Box>
				{children}
			</Box>
		</Box>
	)
}

export default DashboardLayout;