<?php namespace Codesleeve\Sprockets;

use PHPUnit_Framework_TestCase;

class SprocketsParserConfigOneTest extends PHPUnit_Framework_TestCase
{ 
    public function setUp()
    {
    	$config = include 'fixtures/config/config1.php';
 		$config['base_path'] = __DIR__ . '/fixtures';
 		$this->parser = new SprocketsParser($config);
    }

    public function testFilesManifest1()
    {
    	$output = $this->parser->javascriptFiles('manifest1');
    	var_dump($output);
    }


}