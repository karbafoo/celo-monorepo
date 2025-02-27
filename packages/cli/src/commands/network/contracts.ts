import { BaseCommand } from '../../base'
import { printValueMap2 } from '../../utils/cli'

export default class Contracts extends BaseCommand {
  static description = 'Lists Celo core contracts and their addesses.'

  static flags = {
    ...BaseCommand.flags,
  }

  async run() {
    printValueMap2(await this.kit.registry.addressMappingWithNotDeployedContracts())
  }
}
