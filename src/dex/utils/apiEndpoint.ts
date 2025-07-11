import { bsc, bscTestnet } from "wagmi/chains"

/**
 * 根据当前网络选择对应的 API 端点
 * BSC Testnet -> 开发端点
 * BSC Mainnet -> 生产端点
 */
export const getApiEndpoint = (chainId?: number): string => {
	// 如果没有 chainId，使用默认的生产端点
	if (!chainId) {
		return import.meta.env.VITE_API_ENDPOINT || 'https://api.dex.jongun2038.win'
	}

	switch (chainId) {
		case bscTestnet.id: // BSC Testnet
			return import.meta.env.VITE_DEV_API_ENDPOINT || 'https://api.dev-dex.jongun2038.win'
		case bsc.id: // BSC Mainnet
			return import.meta.env.VITE_API_ENDPOINT || 'https://api.dex.jongun2038.win'
		default:
			// 默认使用生产端点
			return import.meta.env.VITE_API_ENDPOINT || 'https://api.dex.jongun2038.win'
	}
}

/**
 * 判断当前是否为开发环境 (BSC Testnet)
 */
export const isDevEnvironment = (chainId?: number): boolean => {
	return chainId === bscTestnet.id
}

/**
 * 获取当前网络的显示名称
 */
export const getNetworkName = (chainId?: number): string => {
	switch (chainId) {
		case bscTestnet.id:
			return 'BSC Testnet'
		case bsc.id:
			return 'BSC Mainnet'
		default:
			return 'Unknown Network'
	}
}
