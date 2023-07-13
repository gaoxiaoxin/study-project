/**
 *  这一部分的工具类型主要使用 条件类型 以及 映射类型，索引类型
 *  结构工具类型其实又可以分为两类， 结构声明 和 结构处理
 */

/**
 *  结构声明工具类型，即快速声明一个结构， 比如 Record
 * 
 */

type Record1 = Record<string, number>;

type Record2 = Record<string | number, any>

/**
 * 
 *  结构处理工具
 */