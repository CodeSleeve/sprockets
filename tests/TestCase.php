<?php namespace Codesleeve\Sprockets;

use PHPUnit_Framework_TestCase;

class TestCase extends PHPUnit_Framework_TestCase
{
    /**
     * Helper function to take out the base path from an
     * array of directories
     * 
     * @param  [type] $dirs [description]
     * @return [type]       [description]
     */
    protected function stripBasePathFromArray($dirs)
    {
    	$newDirs = array();
    	foreach ($dirs as $key => $value)
    	{
    		$newDirs[$key] = str_replace($this->basePath, '', $value);
    	}
    	return $newDirs;
    }	
}
