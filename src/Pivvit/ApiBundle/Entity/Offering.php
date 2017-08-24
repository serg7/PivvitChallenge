<?php

namespace Pivvit\ApiBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;

/**
 * Offering
 */
class Offering
{
    /**
     * @var int
     */
    private $id;

    /**
     * @var string
     */
    private $title;

    /**
     * @var float
     */
    private $price;


    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $purchases;


    /**
     * Constructor
     */
    public function __construct()
    {
        $this->purchases = new ArrayCollection();
    }

    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set title
     *
     * @param string $title
     *
     * @return Offering
     */
    public function setTitle($title)
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Get title
     *
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Set price
     *
     * @param float $price
     *
     * @return Offering
     */
    public function setPrice($price)
    {
        $this->price = $price;

        return $this;
    }

    /**
     * Get price
     *
     * @return float
     */
    public function getPrice()
    {
        return $this->price;
    }


    /**
     * Add purchase
     *
     * @param Purchase $purchase
     *
     * @return Offering
     */
    public function addPurchase(Purchase $purchase)
    {
        $this->purchases[] = $purchase;
        return $this;
    }
    /**
     * Remove purchase
     *
     * @param Purchase $purchase
     */
    public function removePurchase(Purchase $purchase)
    {
        $this->purchases->removeElement($purchase);
    }
    /**
     * Get purchases
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getPurchases()
    {
        return $this->purchases;
    }
}

