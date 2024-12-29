import { statSync } from 'fs'
import { GluegunCommand } from 'gluegun'
import { DataImporter } from '../lib/data-importer'
import { FixedCatDataStore } from '../lib/fixed-cat-datastore'

const command: GluegunCommand = {
  name: 'import',
  alias: 'i',

  run: async (toolbox) => {
    const { print, parameters } = toolbox

    const { input, output } = parameters.options
    if (!input || !output) {
      throw new Error('Both --input and --output options are required')
    }
    if (!statSync(input).isFile()) {
      throw new Error(`${input} is not a file`)
    }
    if (!statSync(output).isFile()) {
      throw new Error(`${output} is not a file`)
    }
    const dataImporter = new DataImporter(input)
    const fixedCats = dataImporter.import()

    const datastore = new FixedCatDataStore(output)
    await datastore.update(fixedCats)

    print.success(`Imported ${fixedCats.length} records into ${output}`)
  },
}

module.exports = command
