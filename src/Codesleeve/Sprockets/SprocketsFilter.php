<?php namespace Codesleeve\Sprockets;

use Assetic\Asset\AssetInterface;
use Assetic\Asset\AssetCollection;
use Assetic\Filter\FilterInterface;

class SprocketsFilter implements FilterInterface 
{
    public function __construct($parser, $generator)
    {
        $this->parser = $parser;
        $this->generator = $generator;
    }

    public function filterLoad(AssetInterface $asset)
    {

    }

    public function filterDump(AssetInterface $asset)
    {
        $content = "";

        $files = array();

        $absolutePath = $asset->getSourceRoot() . '/' . $asset->getSourcePath();

        $this->parser->mime = $this->parser->mimeType($absolutePath);

        $absoluteFilePaths = $this->parser->getFilesArrayFromDirectives($absolutePath);

        foreach ($absoluteFilePaths as $absoluteFilePath)
        {
            $files[] = $this->generator->file($absoluteFilePath, false);
        }

        if (!$absoluteFilePaths)
        {
            $files[] = $this->generator->file($absolutePath, false);
        }

        $global_filters = $this->parser->get("sprockets_filters.{$this->parser->mime}", array());

        $collection = new AssetCollection($files, $global_filters);

        $asset->setContent($collection->dump());
    }
}