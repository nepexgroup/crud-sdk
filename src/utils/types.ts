// export interface IApi {
//     fetch(url: string): Promise<any>
// }
//
// export class BaseApi implements IApi {
//     protected baseUrl = 'https://jsonplaceholder.typicode.com/'
//     async fetch(url: string): Promise<any> {}
// }
//
// // export class AxiosApi extends BaseApi implements IApi {
// //     constructor() {
// //       super()
// //     }
// //     async fetch(url: string): Promise<any> {
// //       const { data } = await axios.get(`${this.baseUrl}${url}`)
// //       return data
// //     }
// //   }
//
// // const message = "Hello world"
// // console.log(message)
//
// // export class Api extends BaseApi implements IApi{
// //     private provider: any = new AxiosApi()
// //     async fetch(url: string): Promise<any> {
// //         return await this.provider.fetch(url)
// //     }
// // }
//
// export class FetchApi extends BaseApi implements IApi {
//     constructor() {
//       super()
//     }
//     async fetch(url: string): Promise<any> {
//       const response = await fetch(`${this.baseUrl}${url}`)
//       return await response.json()
//     }
//   }
